import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Category.css' 

const Category = () => {
    const [meals, setMeals] = useState(null);
    const [selectedCat, setSelectedCat] = useState('Seafood')

    console.log('meals', meals)

    const selectHandle = (category) => {
        setSelectedCat(category)
    }

    const fetchData = async (category) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        const result = await data.json();
        setMeals(result.meals);
    }

    // const linkDetail = '/detail/'.concat(meals.idMeal)

    useEffect(() => {
        fetchData(selectedCat)
    }, [selectedCat])

    return (
        <div>
            <h3>Ini Halaman Category</h3>
            <button onClick={() => selectHandle('Beef')} className='btnCat'>
                Beef
            </button>
            <button onClick={() => selectHandle('Seafood')} className='btnCat'>
                Seafood
            </button>
            {
                meals && meals.length > 0 ? (
                    <div style={{display: 'flex', flexWrap: 'wrap', margin: '2px', background: '#80808024'}}>
                        {
                            meals.map(meal => (
                                <div key={meal.idMeal} className="meal">
                                        <p>{meal.strMeal}</p>
                                        <img style={{width: '100px', height: '100px'}} src={meal.strMealThumb} alt={meal.strMeal}/>
                                        <p>
                                            <Link to={`/detail/${meal.idMeal}`} className="btnDetail">Detail</Link>
                                        </p>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}

export default Category