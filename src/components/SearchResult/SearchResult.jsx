import React from 'react';
import styles from './SearchResult.module.css';
import { BASE_URL } from '../../App';

const SearchResult = ({data}) => {


  return (
    <div className="flex">
{
    data?.map((food)=> 
    
    <div className="FoodCard"  key={food.name}>
     <div className={styles.first}>
                     <div className={styles.card}>
                     <div className={styles.textContent}>
               <p className={styles.title}> {food.name}  </p> 
               <p className={styles.desdiv}>{food.description}</p>
               <p className={styles.price}>$ {food.price}</p> 
               <div className={styles.but}> 
               <button className={styles.button}  onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
    </div>
    <div className={styles.imageWrapper}>
                <img src={BASE_URL + food.image} alt={food.name} className={styles.image}/>
            </div> 
              </div>
              </div> 
              </div>
    )} 
        </div>
    
  )
}

export default SearchResult;
