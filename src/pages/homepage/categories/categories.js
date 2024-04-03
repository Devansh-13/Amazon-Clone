

const Categories = () => {
    const categories = [ 
    {
        id:'id2',
        name:"Fresh",
    },
    {
        id:'id3',
        name:"Amazon Mini TV",
    },
    {
        id:'id4',
        name:"Sell",
    },
    {
        id:'id5',
        name:"Best Sellers",
        fresh:{
            name:"Discount 40%",
        }
    },
    {
        id:'id6',
        name:"Mobiles",
    },
    {
        id:'id9',
        name:"Today's Deals",
        fresh:{
            name:"Sale 20%",
        }
    },
    {
        id:'id7',
        name:"Customer Service",
    },
    {
        id:'id8',
        name:"Prime"
    },
    {
        id:'id9',
        name:"Electronics"
    },
    {
        id:'id10',
        name:"New Releases",
    
    },
    {
        id:'id11',
        name:"Home & Kitchen"
    },
    {
        id:'id12',
        name:"Gift Ideas"
    },
    {
        id:'id13',
        name:"Amazon Pay"
    },
    {
        id:'id14',
        name:"Fashion"
    },
    {
        id:'id15',
        name:"Computers"
    },
    {
        id:'id16',
        name:"Books"
    }
];

    return (
        <div className="nav-categories">
            <div className="all-main-cont border">
                <div className="all-category"></div>
                <span className="all-category-txt">All</span>
            </div>
            {
                <div className="each-category">
                    {
                    categories.map((cat)=>{
                        return(
                            <div 
                            key={cat.id}>{cat.name} 
                            </div>
                            );
                    })
                    }
                </div>
            }
        </div>
    )
}


export default  Categories; 