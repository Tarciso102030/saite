# AguiarT.I - Site Corporativo

Site corporativo da AguiarT.I, especializada em automação comercial e serviços de TI.

## Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seções: Home, Serviços, Sobre, Contato
- ✅ Formulário de contato com validação
- ✅ Integração com WhatsApp
- ✅ Envio de e-mails via EmailJS
- ✅ Animações e micro-interações

## Configuração do E-mail

Para que o formulário de contato funcione corretamente, você precisa configurar o EmailJS:

### 1. Criar conta no EmailJS
1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Confirme seu e-mail

### 2. Configurar serviço de e-mail
1. No painel do EmailJS, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta
5. Anote o **Service ID** gerado

### 3. Criar template de e-mail
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Use este template como base:

```
Assunto: Nova mensagem do site AguiarT.I

Olá,

Você recebeu uma nova mensagem através do formulário de contato do site:

Nome: {{from_name}}
E-mail: {{from_email}}
Empresa: {{company}}
Telefone: {{phone}}
Serviço de Interesse: {{service}}

Mensagem:
{{message}}

---
Esta mensagem foi enviada automaticamente através do formulário de contato do site AguiarT.I.
```

4. Salve e anote o **Template ID**

### 4. Obter Public Key
1. Vá em "Account" > "General"
2. Copie sua **Public Key**

### 5. Atualizar configurações no código
Edite o arquivo `src/utils/emailConfig.ts` e substitua:
- `SERVICE_ID`: pelo Service ID do passo 2
- `TEMPLATE_ID`: pelo Template ID do passo 3  
- `PUBLIC_KEY`: pela Public Key do passo 4

### 6. Atualizar componente
No arquivo `src/components/ContactForm.tsx`, substitua as configurações na função `sendEmail`:

```typescript
const serviceId = 'seu_service_id_aqui';
const templateId = 'seu_template_id_aqui';  
const publicKey = 'sua_public_key_aqui';
```

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

## Deploy

O site está configurado para deploy automático no Netlify.

## Contato

- **Telefone**: (51) 99666-8646
- **E-mail**: tarciso@aguiarti.com.br
- **WhatsApp**: Integrado no site