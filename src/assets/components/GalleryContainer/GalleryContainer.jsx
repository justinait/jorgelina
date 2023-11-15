import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import db from '../../../firebaseConfig';

function GalleryContainer() {
    
  const [listPaintings, setListPaintings] = useState([])
  const { category } = useParams();

  // const getPaintings = async () => {

  //   const paintingCollection = collection(db, 'paintings')
  //   const paintingSnapshot = await getDocs(paintingCollection)
  //   const categoryList = paintingSnapshot.docs.map( (e) => {
  //     let categoryPaintings = e.data();
  //     categoryPaintings.id = e.id;
  //     return categoryPaintings;
  //   })

  //   if(category){
  //     let paintingsImages = categoryList.filter( (e) => {
  //       return e.id == category
  //     })
  //     paintingsImages.map(e => {        
  //       return e        
  //     })
  //     let array = Object.values(paintingsImages)
  //     return array
  //   }

  // }

  const getCategory = async () => {
    const docRef = doc(db, 'paintings', category);
    const docSnapshot = await getDoc(docRef);
    let categoryList = docSnapshot.data();
    categoryList.category = docSnapshot.id;
    //no se si deberia poner = docSnapshot.id; asi o .category
    
    return categoryList
  }
  
  useEffect(() => {
    
    getCategory()
      .then( (res) => { 
        setListPaintings(res)
        //q es un objeto con todos los cuadros q tmb son objetos, llamados 1 2 3
      })
          
  }, [category])


  return(
    <div>
      {console.log(listPaintings)}
      <Gallery paintings={listPaintings}/>
      < Footer />
    </div>
  )
}

export default GalleryContainer