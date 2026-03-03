const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-gradient-gold font-display font-bold text-lg">AURUM</span>
          <span className="text-muted-foreground text-sm ml-2">· Vantage Hackathon</span>
        </div>
        <p className="text-muted-foreground text-xs">
          Organized by CSE (Data Science) Department · Hosted on Devfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
