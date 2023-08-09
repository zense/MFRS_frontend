import React from 'react'
import './FoodCard.scss'

export default function FoodCard() {
  return (
    <div className='outer-card-temp'>
    <div className='card'>
        <div className="card-image">
        <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=740&t=st=1690968609~exp=1690969209~hmac=ffa42e96bd820750fb9f14e4b9d1a3fd039b99b1432a48f1079468cc8ea5eb11" alt="food" />
        </div>
        <div className='card-text'>
            <div className='card-text-name'>
                <h1>Paneer Butter Masala</h1>
                <h2>Veg Gravy</h2>
            </div>
            <div className='card-text-rating'>
                <div className='rating-recent'>
                  <img src="https://images.freeimages.com/fic/images/icons/2166/oxygen/48/rating.png" alt="" />
                  <p>3.8 (2990)<img src="https://media.istockphoto.com/id/1141295444/vector/clock-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=xODeD4gcgpVxBEEUIMqr1DuHzXbBwdNp9AgIrHhd7L8=" alt="clock" /></p>
                </div>
                <div className='rating-notrecent'>
                <img src="https://images.freeimages.com/fic/images/icons/2166/oxygen/48/rating.png" alt="" />
                <p>4.0 (1023)</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
