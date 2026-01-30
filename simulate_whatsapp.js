const WHATSAPP_NUMBER = '558199138227'; // +55 81 999138227

const formData = {
  name: 'João Silva',
  company: 'Empresa X',
  email: 'joao@exemplo.com',
  phone: '(81) 99999-9999',
  message: 'Tenho interesse em uma proposta para recrutamento e PDI.'
};

function buildMessage(data) {
  return `*Nova solicitação de proposta*\n\n*Nome:* ${data.name || '-'}\n*Empresa:* ${data.company || '-'}\n*E-mail:* ${data.email || '-'}\n*Telefone:* ${data.phone || '-'}\n*Mensagem:* ${data.message || '-'} `;
}

const text = buildMessage(formData);
const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

console.log('--- Simulação de envio para WhatsApp ---');
console.log('\nMensagem (sem encoding):\n');
console.log(text);
console.log('\nURL que seria aberta (copie e cole no navegador):\n');
console.log(url);
