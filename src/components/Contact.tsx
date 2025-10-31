import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | null;
    text: string;
  }>({ type: null, text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: null, text: '' });

    try {
      // Initialize EmailJS (you only need to do this once in your app)
      emailjs.init(import.meta.env.VITE_PUBLIC_EMAILJS_USER_ID);

      // Send email
      const result = await emailjs.send(
  import.meta.env.VITE_PUBLIC_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,        // Matches {{name}} in template
          email: formData.email,      // Matches {{email}} in template
          message: formData.message,  // Matches {{message}} in template
          title: 'Portfolio Contact', // Matches {{title}} in template (optional)
        }
      );

      console.log('Email sent successfully:', result);
      setStatusMessage({
        type: 'success',
        text: "Message sent successfully! I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatusMessage({ type: null, text: '' });
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setStatusMessage({
        type: 'error',
        text: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'ayush.aryan014@outlook.com',
      href: 'mailto:ayush.aryan014@outlook.com',
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+91 7703953400',
      href: 'tel:+917703953400',
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Chennai, Tamil Nadu',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      href: 'https://github.com/DarkSorcerer14',
      color: 'hover:text-slate-300',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayush-aryan-3a4688281',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            I am actively pursuing internship and entry-level developer positions where I can contribute my skills to impactful projects. Let's connect about a potential role!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">{info.icon}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 mb-1">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-slate-300">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 bg-slate-800 rounded-lg transition-all border border-slate-700 hover:border-cyan-500/50 ${social.color} group`}
                  >
                    <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                    <span className="text-sm">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 p-6">
              <h3 className="font-bold mb-2 text-cyan-400">Open to Opportunities</h3>
              <p className="text-sm text-slate-300">
                I am actively seeking opportunities where I can contribute analytical skills to meaningful projects and grow as a developer. Let's build something great together!
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {/* Status Message */}
            {statusMessage.type && (
              <div
                className={`mb-4 p-4 rounded-lg border ${
                  statusMessage.type === 'success'
                    ? 'bg-green-500/10 border-green-500/30 text-green-400'
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}
              >
                {statusMessage.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-slate-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors text-slate-100 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400 border-t border-slate-800 pt-8">
          <p>
            &copy; 2025 Ayush Aryan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};