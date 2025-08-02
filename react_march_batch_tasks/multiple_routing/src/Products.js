

const products=[
    {
        id:1,
        name:"Product 1",
        price:"$50.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGCnp2gIqpK_QzEVjTMYO8-8AWvnesq9Jiw&s",
    },
    {
        id:2,
        name:"Product 2",
        price:"$60.00",
        image:"https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id:3,
        name:"Product 3",
        price:"$40.00",
        image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/rosewater-raspberry-sponge-cake-7d10c9a.jpg",
    },
    {
        id:4,
        name:"Product 4",
        price:"$30.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-fzMJufhk7C8kETmHCqAKwIFc_IrMwD7ThsaIFcRmZa7EFWvi3ceCqXqiWG-4SgOmHTo&usqp=CAU",
    },
    {
        id:5,
        name:"Product 5",
        price:"$40.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIOqJRildjeLnkd1CtGAvVZBAsyQXIJIIBQWL5HDKd9-jhkEA2NGXVYeuetmrzmOXG_-U&usqp=CAU",
    },
    {
        id:6,
        name:"Product 6",
        price:"$45.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXq-yZk8IMzoonAPWx4ja9ppWQdcyQ5u3t3A&s",
    },
    {
        id:7,
        name:"Product 7",
        price:"$25.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNruaYa_uZmUkCkCf8x2PN8rPcrNL2I18sLhatEAkggd0OAy1I9rgEp8LnjSVs2fbtQnM&usqp=CAU",
    },
    {
        id:8,
        name:"Product 8",
        price:"$36.00",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNZbPyThUd-ByBEGeh11WMmSmOLBiXitMOxOKpRa_8ZehdNmSukKv0izFHyau0uqEnNs&usqp=CAU",
    },
];

function Products(){
    return(
        <div className="container mt-5">
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100" style={{overflow: "hidden", transition: "transform 0.3s ease-in-out", cursor: "pointer"}}
                            onMouseEnter={(e) => e.currentTarget.style.transform="scale(1)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform="scale(1.05)"}
                        >
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h6 className="card-title text-muted">{product.name}</h6>
                                <p className="card-text text-muted">{product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;