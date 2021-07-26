const handleSumTotal = (cart) => {
  const sum = cart.map(item => item.price).reduce( (acc, cur) => acc+cur);
  return sum;
}

export default handleSumTotal;