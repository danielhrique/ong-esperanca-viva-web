import { showToast } from './notifications.js';
import { getData, saveData } from './storage.js';

function getFields(form) {
  return Array.from(form.querySelectorAll('input, select, textarea'));
}

function createFieldMessage(field) {
  const message = document.createElement('span');
  const messageId = `${field.id || field.name}-message`;

  message.id = messageId;
  message.className = 'field-message';
  message.setAttribute('aria-live', 'polite');
  field.setAttribute('aria-describedby', messageId);
  field.insertAdjacentElement('afterend', message);

  return message;
}

function getFieldMessage(field) {
  return document.getElementById(field.getAttribute('aria-describedby')) || createFieldMessage(field);
}

function getCustomMessage(field) {
  if (field.validity.valueMissing) {
    return 'Este campo é obrigatório.';
  }

  if (field.validity.typeMismatch) {
    return 'Informe um valor compatível com o tipo solicitado.';
  }

  if (field.validity.patternMismatch) {
    return field.title || 'Informe o valor no formato solicitado.';
  }

  if (field.validity.tooShort) {
    return `Informe pelo menos ${field.minLength} caracteres.`;
  }

  if (field.validity.rangeUnderflow || field.validity.rangeOverflow) {
    return `Informe um valor entre ${field.min} e ${field.max}.`;
  }

  return field.validationMessage || 'Revise este campo.';
}

function validateField(field) {
  const message = getFieldMessage(field);
  const hasValue = field.value.trim() !== '';

  field.classList.remove('field-error', 'field-success');
  message.classList.remove('message-error', 'message-success');
  message.textContent = '';

  if (!hasValue && !field.required) {
    return true;
  }

  if (!field.checkValidity()) {
    field.classList.add('field-error');
    message.classList.add('message-error');
    message.textContent = getCustomMessage(field);
    return false;
  }

  if (hasValue) {
    field.classList.add('field-success');
    message.classList.add('message-success');
    message.textContent = 'Campo preenchido corretamente.';
  }

  return true;
}

function updateFormFeedback(form, feedback) {
  const requiredFields = Array.from(form.querySelectorAll('[required]'));
  const filledFields = requiredFields.filter((field) => field.value.trim() !== '').length;

  feedback.textContent = `${filledFields} de ${requiredFields.length} campos obrigatórios preenchidos.`;
}

function restoreSavedFormData(form, fields, feedback) {
  const savedData = getData('cadastroApoiador');

  if (!savedData) {
    return;
  }

  fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(savedData, field.name)) {
      field.value = savedData[field.name];
      validateField(field);
    }
  });

  if (feedback) {
    feedback.textContent = 'Dados recuperados do armazenamento local.';
  }

  showToast('Dados recuperados do armazenamento local.', 'info');
}

export function setupFormValidation() {
  const form = document.querySelector('form');
  const feedback = document.querySelector('.form-feedback');

  if (!form) {
    return;
  }

  const fields = getFields(form);
  fields.forEach(createFieldMessage);

  if (feedback) {
    updateFormFeedback(form, feedback);
  }

  restoreSavedFormData(form, fields, feedback);

  form.addEventListener('input', (event) => {
    const field = event.target.closest('input, select, textarea');

    if (!field) {
      return;
    }

    validateField(field);

    if (feedback) {
      updateFormFeedback(form, feedback);
    }
  });

  form.addEventListener('blur', (event) => {
    const field = event.target.closest('input, select, textarea');

    if (field) {
      validateField(field);
    }
  }, true);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isFormValid = fields.map(validateField).every(Boolean);

    if (!isFormValid) {
      if (feedback) {
        feedback.textContent = 'Revise os campos destacados antes de enviar.';
      }
      showToast('Revise os campos destacados antes de enviar.', 'error');
      form.reportValidity();
      return;
    }

    const formData = Object.fromEntries(new FormData(form));
    saveData('cadastroApoiador', formData);

    if (feedback) {
      feedback.textContent = 'Cadastro salvo localmente com sucesso.';
    }

    showToast('Cadastro salvo localmente com sucesso.', 'success');

    form.reset();
    fields.forEach((field) => {
      const message = getFieldMessage(field);
      field.classList.remove('field-error', 'field-success');
      message.classList.remove('message-error', 'message-success');
      message.textContent = '';
    });
  });
}
