import Link from 'next/link';
import { Hexagon, Twitter, Github, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  product: [
    { name: 'NFT Subscriptions', href: '/services#nft-subscriptions' },
    { name: 'Checkout System', href: '/services#checkout' },
    { name: 'Crypto Payments', href: '/services#payments' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/about#careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Documentation', href: 'https://docs.excelliondao.com' },
    { name: 'API Reference', href: 'https://docs.excelliondao.com/api' },
    { name: 'Integration Guide', href: 'https://docs.excelliondao.com/integration' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Status Page', href: 'https://status.excelliondao.com' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/excelliondao' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/excelliondao' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/excelliondao' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/excelliondao' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Hexagon className="w-10 h-10 text-primary-500" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold gradient-text">ED</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Excellion</span>
                <span className="gradient-text">Dao</span>
              </span>
            </Link>
            <p className="text-dark-400 text-sm mb-6 max-w-xs">
              Building the future of blockchain payments. NFT subscriptions, 
              crypto checkout, and seamless payment solutions.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-white hover:bg-primary-500/20 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-dark-400 text-sm">
                <Mail className="w-4 h-4 mt-0.5 text-primary-500" />
                <span>connect@excelliondao.com</span>
              </li>
              <li className="flex items-start gap-3 text-dark-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-500" />
                <span>Decentralized & Global</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold mb-1">Stay Updated</h4>
              <p className="text-dark-400 text-sm">Subscribe to our newsletter for the latest updates.</p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-500">
          <p>© {new Date().getFullYear()} ExcellionDao. All rights reserved.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-dark-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

