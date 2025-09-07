import emailjs from '@emailjs/browser';

export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}) => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      customer_email: formData.email,
      phone: formData.phone,
      service_type: formData.service,
      message: formData.message,
      to_email: 'kontakt@azizesankande.com'
    };

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
    );

    return { success: true, result };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error };
  }
};