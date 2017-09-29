class ProductList extends React.Component {
  state={
      products:[]
    };
  componentDidMount() {
this.setState({
   products: Seed.products })
}
reverse =(event)=>{
  event.preventDefault()
  const reversed=this.state.products.sort((a,b)=>{
  return (a.votes-b.votes)
}
)
this.setState=({
  products:reversed
})
}
handleProductDownVote=(productId)=>{
  console.log("reverse");
  event.preventDefault()
  const nextProducts = this.state.products.map((product)=>{
  if(product.id === productId){
    return Object.assign({},product,{
      votes:product.votes-1
    });
  }
  else{
    return product
  }}
);
this.setState({
  products:nextProducts
});
}


  handleProductUpVote=(productId) => {
    console.log("voted");
    event.preventDefault()
    const nextProducts = this.state.products.map((product) => {
  if (product.id === productId) {
  return Object.assign({}, product, {
  votes: product.votes + 1,
  });
  } else {
  return product;
  }
  });
  this.setState({
  products: nextProducts,
  });
  }
render() {
  const products=this.state.products.sort((a,b)=>
  b.votes-a.votes
);
const productComponents = products.map((product) => (
<Product
key={'product-' + product.id}
id={product.id}
title={product.title}
description={product.description}
url={product.url}
votes={product.votes}
submitterAvatarUrl={product.submitterAvatarUrl}
productImageUrl={product.productImageUrl}
handleProductUpVote={this.handleProductUpVote}
handleProductDownVote={this.handleProductDownVote}
/>
));
    return (
      <div className="ui unstackable items">
      { productComponents }
      </div>
  );
  }
}
class Product extends React.Component {

handleUpVote=()=>{
  this.props.handleProductUpVote(this.props.id);
}
handleDownVote=()=>{
  this.props.handleProductDownVote(this.props.id);
}
render() {
return (
<div className='item'>
<div className='image'>
<img src={this.props.productImageUrl} />
</div>
<div className='middle aligned content'>
<div className='header'>
<a onClick={this.handleUpVote}>
<i className='large caret up icon' />
</a>
{this.props.votes}
<a onClick={this.handleDownVote}>
<i className='large caret down icon' />
</a>
</div>
<div className='description'>
<a href={this.props.url}>
{this.props.title}
</a>
<p>
{this.props.description}
</p>
</div>
<div className='extra'>
<span>Submitted by:</span>
<img
className='ui avatar image'
src={this.props.submitterAvatarUrl}
/>
</div>
</div>
</div>
);
}
}
ReactDOM.render(
  <ProductList />,
  document.getElementById("content")
);
