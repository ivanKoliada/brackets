module.exports = function check(str, bracketsConfig) {
   let config = bracketsConfig.map(e => e.join(""));
   while (config.some(e => str.includes(e))) {
      for (let i = 0; i < config.length; i++) {
         str = str.replace(config[i], '');
      }
   }

   return Boolean(!str.length);
};
