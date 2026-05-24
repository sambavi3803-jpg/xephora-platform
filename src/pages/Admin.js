// src/pages/Admin.js

import {
  useContext,
  useState
} from "react";

import Swal from "sweetalert2";

import {
  StoreContext
} from "../context/StoreContext";

import "./Admin.css";

export default function Admin() {

  const {

    products,

    orders

  } = useContext(StoreContext);

  /* ===================================== */
  /* ===== STATES ===== */
  /* ===================================== */

  const [productList, setProductList] =
    useState(products);

  const [name, setName] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [mrp, setMrp] =
    useState("");

  const [offer, setOffer] =
    useState("");

  const [image, setImage] =
    useState("");

  const [

    editIndex,

    setEditIndex

  ] = useState(null);

  /* ===================================== */
  /* ===== REVENUE ===== */
  /* ===================================== */

  const totalRevenue =

    orders.reduce(

      (total,order)=>

        total + order.total,

      0
    );

  /* ===================================== */
  /* ===== ADD / UPDATE PRODUCT ===== */
  /* ===================================== */

  const handleAddProduct = () => {

    if(

      !name ||

      !category ||

      !price ||

      !mrp ||

      !offer ||

      !image

    ){

      Swal.fire({

        icon:"warning",

        title:"Fill All Fields ❌"
      });

      return;
    }

    const newProduct = {

      id:Date.now(),

      name,

      category,

      price:Number(price),

      mrp:Number(mrp),

      rating:4.5,

      reviews:120,

      offer,

      image
    };

    /* ===================================== */
    /* ===== UPDATE ===== */
    /* ===================================== */

    if(editIndex !== null){

      const updatedProducts =
      [...productList];

      updatedProducts[editIndex] =
      newProduct;

      setProductList(
        updatedProducts
      );

      Swal.fire({

        icon:"success",

        title:"Product Updated ✅",

        showConfirmButton:false,

        timer:1500
      });

      setEditIndex(null);
    }

    /* ===================================== */
    /* ===== ADD ===== */
    /* ===================================== */

    else{

      setProductList([

        newProduct,

        ...productList
      ]);

      Swal.fire({

        icon:"success",

        title:"Product Added 🎉",

        showConfirmButton:false,

        timer:1500
      });
    }

    /* ===================================== */
    /* ===== RESET ===== */
    /* ===================================== */

    setName("");

    setCategory("");

    setPrice("");

    setMrp("");

    setOffer("");

    setImage("");
  };

  /* ===================================== */
  /* ===== DELETE PRODUCT ===== */
  /* ===================================== */

  const handleDelete = (id) => {

    Swal.fire({

      title:"Delete Product?",

      text:"This action cannot be undone",

      icon:"warning",

      showCancelButton:true,

      confirmButtonColor:"#ef4444",

      cancelButtonColor:"#2563eb",

      confirmButtonText:"Delete"

    }).then((result)=>{

      if(result.isConfirmed){

        setProductList(

          productList.filter(

            (item)=>

              item.id !== id
          )
        );

        Swal.fire({

          icon:"success",

          title:"Deleted Successfully 🗑️",

          showConfirmButton:false,

          timer:1200
        });
      }
    });
  };

  return (

    <div className="adminPage">

      {/* ===================================== */}
      {/* ===== TITLE ===== */}
      {/* ===================================== */}

      <div className="adminTop">

        <h1>

          Admin Dashboard 👑

        </h1>

        <p>

          Manage Products & Orders

        </p>

      </div>

      {/* ===================================== */}
      {/* ===== STATS ===== */}
      {/* ===================================== */}

      <div className="adminStats">

        <div className="adminCard">

          <h2>

            {productList.length}

          </h2>

          <p>

            Total Products

          </p>

        </div>

        <div className="adminCard">

          <h2>

            {orders.length}

          </h2>

          <p>

            Total Orders

          </p>

        </div>

        <div className="adminCard">

          <h2>

            ₹{totalRevenue}

          </h2>

          <p>

            Revenue

          </p>

        </div>

      </div>

      {/* ===================================== */}
      {/* ===== ADD PRODUCT ===== */}
      {/* ===================================== */}

      <div className="addProductBox">

        <h2>

          {

          editIndex !== null

          ? "Update Product"

          : "Add Product"

          }

        </h2>

        <div className="formGrid">

          <input
            type="text"

            placeholder="Product Name"

            value={name}

            onChange={(e)=>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="text"

            placeholder="Category"

            value={category}

            onChange={(e)=>
              setCategory(
                e.target.value
              )
            }
          />

          <input
            type="number"

            placeholder="Price"

            value={price}

            onChange={(e)=>
              setPrice(
                e.target.value
              )
            }
          />

          <input
            type="number"

            placeholder="MRP"

            value={mrp}

            onChange={(e)=>
              setMrp(
                e.target.value
              )
            }
          />

          <input
            type="text"

            placeholder="Offer"

            value={offer}

            onChange={(e)=>
              setOffer(
                e.target.value
              )
            }
          />

          <input
            type="text"

            placeholder="Image URL"

            value={image}

            onChange={(e)=>
              setImage(
                e.target.value
              )
            }
          />

        </div>

        <button
          className="addBtn"

          onClick={handleAddProduct}
        >

          {

          editIndex !== null

          ? "Update Product"

          : "Add Product"

          }

        </button>

      </div>

      {/* ===================================== */}
      {/* ===== PRODUCTS ===== */}
      {/* ===================================== */}

      <div className="productsTable">

        <h2>

          Product Management

        </h2>

        {

          productList.map((item,index)=>(

            <div
              className="tableRow"

              key={item.id}
            >

              {/* ===== IMAGE ===== */}

              <img
                src={item.image}
                alt=""
              />

              {/* ===== INFO ===== */}

              <div className="tableInfo">

                <h3>

                  {item.name}

                </h3>

                <p>

                  {item.category}

                </p>

                <span>

                  ₹{item.price}

                </span>

              </div>

              {/* ===== ACTIONS ===== */}

              <div className="adminActions">

                <button
                  className="editBtn"

                  onClick={() => {

                    setName(item.name);

                    setCategory(item.category);

                    setPrice(item.price);

                    setMrp(item.mrp);

                    setOffer(item.offer);

                    setImage(item.image);

                    setEditIndex(index);
                  }}
                >

                  Edit

                </button>

                <button
                  className="deleteBtn"

                  onClick={() =>
                    handleDelete(
                      item.id
                    )
                  }
                >

                  Delete

                </button>

              </div>

            </div>
          ))
        }

      </div>

    </div>
  );
}