import React from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from 'axios'
import { useState, useEffect } from 'react'
import Item from "../UI/Item";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {

  const [filter, setFilter] = useState("")
  const [loadedItems, setloadedItems] = useState(8)
  const [items, setItems] = useState([])
  
  const getItems = async () => {
    await axios
      .get(`https://us-central1-nft-cloud-functions.cloudfunctions.net/explore?filter=${filter}`)
      .then((response) => {
        setItems(response.data)
      })
  }

  const filterNfts = (filter) => {
    setFilter(filter)
  }

  const loadItems = () => setloadedItems(prevNum => prevNum + 4)

  useEffect(() => {
    getItems()
  }, [filter])

  const loading = items.length === 0

  return (
    <>
      <div>
        <select id="filter-items" defaultValue="" onChange={(e) => filterNfts(e.target.value)}>
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? new Array(8).fill(0).map((_, index) => (
        <div className="nft__item" style={{width: "50%"}}>
          <div className="author_list_pp">
            <Skeleton width={"50px"} height={"50px"} borderRadius={"50%"} />
            <i className="fa fa-check"></i>
          </div>
          <div className="nft__item_wrap" style={{display: "flex", justifyContent: "center"}}>
            <Skeleton width={"100%"} height={"350px"} />
          </div>
          <div className="nft__item_info">
            <Skeleton width={"180px"} height={"30px"} />
            <Skeleton width={"100px"} height={"20px"} />
            <Skeleton width={"30px"} height={"15px"} />
          </div>
        </div>
      )) : items.slice(0, loadedItems).map((item, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <Item 
            key={index}
            index={index} 
            authorId={item.authorId} 
            authorImage={item.authorImage} 
            nftImage={item.nftImage} 
            nftId={item.nftId} 
            title={item.title} 
            price={item.price} 
            likes={item.likes} 
            expiryDate={item.expiryDate}
          />
        </div>
        ))
      }
      {
        loadedItems !== 16 ? 
        <div className="col-md-12 text-center">
        <Link to="" id="loadmore" className="btn-main lead" onClick={loadItems}>
          Load more
        </Link>
      </div> : <></>
      }
    </>
  );
};

export default ExploreItems;
