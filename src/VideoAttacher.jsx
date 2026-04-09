function VideoAttacher(props){
    return(  
        <div className="content">
        <video className="videos" controls loop autoPlay muted playsInline  src={props.video}></video>
        </div>
    )
}
export default VideoAttacher