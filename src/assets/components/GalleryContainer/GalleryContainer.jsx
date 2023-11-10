import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import db from '../../../firebaseConfig';

function GalleryContainer() {
    
  const [listPaintings, setListPaintings] = useState([])
  const { category } = useParams();

  const getPaintings = async () => {
    const paintingCollection = collection(db, 'paintings')
    const paintingSnapshot = await getDocs(paintingCollection)

    const categoryList = paintingSnapshot.docs.map( (e) => {
      let categoryPaintings = e.data();
      categoryPaintings.id = e.id;

      return categoryPaintings;

    })

    if(category){

      let paintingsImages = categoryList.filter( (e) => {
        return e.id == category
      })
      
      paintingsImages.map(e => {        
        return e        
      })
      
      let array = Object.values(paintingsImages)
      // console.log(array)

      return array
    }

  }

  useEffect(() => {
    
    getPaintings()
      .then( (res) => { 
        setListPaintings(res)
      })
          
  }, [category])


  return(
    <div>
      <Gallery dataImages={listPaintings}/>
      < Footer />
    </div>
  )
}

export default GalleryContainer