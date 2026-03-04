import aurum_small from "@/assets/aurum-small.png";


const Footer = () => {
  return (
    <footer className="border-t-2 border-gold/20 py-8 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <a href="#" className="flex items-center">
          <img src={aurum_small} alt="Aurum" className="h-10 w-auto" />
        </a>
        </div>
        <p className="text-muted-foreground text-xs font-mono">
          TechClan · Ace Society
        </p>
      </div>
    </footer>
  );
};

export default Footer;
