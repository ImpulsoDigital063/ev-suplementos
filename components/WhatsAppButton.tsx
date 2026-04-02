'use client'

import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5599981140494?text=Ol%C3%A1%20Erlane!%20Quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20gratuita."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[999] flex items-center justify-center rounded-full shadow-2xl"
      style={{
        width: 58,
        height: 58,
        backgroundColor: '#25D366',
        boxShadow: '0 4px 24px rgba(37,211,102,0.45)',
      }}
    >
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ backgroundColor: 'rgba(37,211,102,0.35)' }}
      />
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        className="relative z-10"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.471 2.027 7.774L0 32l8.468-2.002A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.856l-.486-.29-5.03 1.189 1.224-4.9-.318-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.878c-.398-.199-2.353-1.161-2.717-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.982-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.895-2.158-1.227-2.955-.323-.775-.651-.67-.895-.682l-.763-.013c-.265 0-.696.1-1.06.497-.364.398-1.393 1.361-1.393 3.32s1.427 3.85 1.626 4.115c.199.265 2.807 4.285 6.802 6.009.951.41 1.693.655 2.271.839.954.304 1.823.261 2.51.158.766-.114 2.353-.962 2.685-1.891.332-.929.332-1.726.232-1.891-.099-.166-.364-.265-.762-.464z" />
      </svg>
    </motion.a>
  )
}
