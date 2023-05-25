const Logos = ({count, list_images}) => {

  if (count <= list_images.length -3){
    var count1 = count
    var count2 = count +1
    var count3 = count +2
  }
  if (count === list_images.length -2){
      var count1 = count
      var count2 = count +1
      var count3 = 0
  }
  if (count === list_images.length -1){
    var count1 = count
    var count2 = 0
    var count3 = 1
}

  return (
    <div className='studied_images'>
        <img lazy="true" className='first image' src={list_images[count1]}></img>
        <img lazy="true" className='second image' src={list_images[count2]}></img>
        <img lazy="true" className='third image' src={list_images[count3]}></img>
    </div>
  )
}

export default Logos
