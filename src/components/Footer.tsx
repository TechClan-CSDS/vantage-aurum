const Footer = () => {
  return (
    <footer className="border-t-2 border-gold/20 py-8 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-gradient-gold font-display font-black text-xl uppercase tracking-wider">AURUM</span>
          <span className="text-muted-foreground text-xs ml-3 font-mono">· Vantage Hackathon</span>
        </div>
        <p className="text-muted-foreground text-xs font-mono">
          CSE (Data Science) Department · Hosted on Devfolio
        </p>
      </div>
    </footer>
  );
};

export default Footer;
