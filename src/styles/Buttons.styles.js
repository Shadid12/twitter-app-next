export const ButtonStyle = type => {
  switch(type) {
    case 'nav': 
      return `bg-purple-100 p-4 rounded-lg hover:bg-purple-300 ml-4`;
    case 'primary':
      return `px-4 
      ml-3
      py-3 
      mt-4 
      border 
      shadow-md 
      rounded-md 
      hover:bg-gray-50
      disabled:bg-gray-50
    `;
    default: 
      return `px-4 hover:bg-pink-50`;
  }
}