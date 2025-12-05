import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <Logo />
          <p className="text-sm text-gray-500 mt-2">
            © 2024 AnimLearn. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-gray-600 text-sm">
          <a href="#" className="hover:text-blue-600">
            นโยบายความเป็นส่วนตัว
          </a>
          <a href="#" className="hover:text-blue-600">
            ข้อกำหนดและเงื่อนไข
          </a>
          <a href="#" className="hover:text-blue-600">
            ติดต่อเรา
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
