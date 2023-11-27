import React, { useEffect, useState } from 'react'
import { getDocs, collection, doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import db from '../../../firebaseConfig';

function GalleryContainer() {
    
  const [listPaintings, setListPaintings] = useState([])
  const { category } = useParams();

  const getCategory = async () => {
    const docRef = doc(db, 'paintings', category);
    const docSnapshot = await getDoc(docRef);
    let categoryList = docSnapshot.data();
    categoryList.category = docSnapshot.id;
    
    return categoryList
  }
  
  useEffect(() => {
    
    getCategory()
      .then( (res) => { 
        setListPaintings(res)
      })
          
  }, [category])


  return(
    <div>
      <Gallery paintings={listPaintings}/>
      < Footer />
    </div>
  )
}

export default GalleryContainer