module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(360deg)" },
          "30%": { transform: "rotate(370deg)" },
          "35%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin2: {
          "0%": { transform: "rotate(0deg)" },
          "20%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(-180deg)" },
          "35%": { transform: "rotate(-190deg)" },
          "40%": { transform: "rotate(-180deg)" },
          "78%": { transform: "rotate(-180deg)" },
          "95%": { transform: "rotate(-360deg)" },
          "98%": { transform: "rotate(-370deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        spin3: {
          "0%": { transform: "rotate(0deg)" },
          "27%": { transform: "rotate(0deg)" },
          "40%": { transform: "rotate(180deg)" },
          "45%": { transform: "rotate(190deg)" },
          "50%": { transform: "rotate(180deg)" },
          "62%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(360deg)" },
          "80%": { transform: "rotate(370deg)" },
          "85%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        spin4: {
          "0%": { transform: "rotate(0deg)" },
          "38%": { transform: "rotate(0deg)" },
          "60%": { transform: "rotate(-360deg)" },
          "65%": { transform: "rotate(-370deg)" },
          "75%": { transform: "rotate(-360deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
      animation: {
        spin: "spin 3s linear infinite",
        spin2: "spin2 3s linear infinite 0.2s",
        spin3: "spin3 3s linear infinite 0.3s",
        spin4: "spin4 3s linear infinite 0.4s",
      },
      fontFamily: {
        jelly: ["JellyBelly", "sans-serif"],
        choco: ["ChocoCrunch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
