export const ButtonStyle = type => {
  switch(type) {
    case 'primary':
      return `px-4 
      py-3 
      mt-4 
      border 
      shadow-md 
      rounded-md 
      hover:bg-gray-50`;
    default: 
      return `px-4 hover:bg-pink-50`;
  }
}