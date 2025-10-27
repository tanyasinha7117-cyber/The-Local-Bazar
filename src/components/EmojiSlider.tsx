const EmojiSlider = () => {
  const emojis = ['🖇️', '📦', '🗃️', '🗑️', '✉', '📑', '🛒'];
  
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 py-3 border-b border-border">
      <div className="flex animate-slide-infinite whitespace-nowrap will-change-transform">
        {/* First set of emojis */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-1-${index}`}
            className="text-xl mx-8 inline-block"
            style={{ 
              WebkitTextStroke: '0px',
              textRendering: 'optimizeLegibility',
              filter: 'none',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            {emoji}
          </span>
        ))}
        {/* Duplicate set for seamless loop */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-2-${index}`}
            className="text-xl mx-8 inline-block"
            style={{ 
              WebkitTextStroke: '0px',
              textRendering: 'optimizeLegibility',
              filter: 'none',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            {emoji}
          </span>
        ))}
        {/* Third set for seamless loop */}
        {emojis.map((emoji, index) => (
          <span
            key={`emoji-3-${index}`}
            className="text-xl mx-8 inline-block"
            style={{ 
              WebkitTextStroke: '0px',
              textRendering: 'optimizeLegibility',
              filter: 'none',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default EmojiSlider;
