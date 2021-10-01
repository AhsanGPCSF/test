import "./youtube.css";
import Player from "react-youtube";
import { useState } from "react";
import { BrowserRouter, Route, Link, useParams } from "react-router-dom";

function Thumbnail(props) {
    return <Link to={"/watch/" +  props.vid.id} ><div className="videoBox">
        <img id="img" src={"https://img.youtube.com/vi/"+ props.vid.id +"/0.jpg"} />
        <h5 className="txt">{props.vid.title}</h5>
    </div>
    </Link>
}

function PlayVideo() {
    
    let params = useParams();
    return<div>
        <Player videoId={params.videoID}></Player>
    </div>
}


export function Youtube() {

    let [search,setSearch] = useState();
    
    let [videos,setvideos] = useState([
        {id: "FRYnMdQv85E",
         title: "Tom and Jerry",
        category:"cartoon"
        },
        {id: "5mpq_4rzB1U",
         title: "Tere sang yara",
        category:"Song"
        },
        {id: "RB7HSsPXOck",
         title: "Khuda or muhabbat",
        category:"Drama"
        },
        {id: "MRQg0ueMcE0",
         title: "Doreamon",
        category:"Cartoon"
        },
        {id: "Err3v0LmmjE",
         title: "Punjabi Movie",
        category:"Film"
        },
        {id: "kPn1fovn2WM",
         title: "Make React Firebase",
        category:"Education"
        },
        {id: "ULEQb_l-N08",
         title: "KGF Movie",
        category:"Film"
        },
        {id: "2HnZglN4hXs",
         title: "PSL",
        category:"cricket"
        }
    ]);
    return <div>
        <BrowserRouter>


        <Route path="/watch/:videoID" component={PlayVideo}/>
        <div id="you">Sasti Youtube🙄</div>
        <div id="sear"><input id="search" type="text" placeholder="Search" onChange={(evt)=>{
            setSearch(evt.target.value);
        }} /></div>
        <div className="videos">
            {
                videos.filter((video)=>{
                   return search ? video.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) : true 
                }).map((video,index)=>{
                    return <div> <Thumbnail vid={video} />
                    <button className="btn" onClick={()=>{
                        videos.splice(index,1);
                        setvideos([...videos]);
                    }
                    }>Delete</button>
                    </div>
                })
            }
        </div>
            <div><hr /></div>
            <div><hr /></div>
            <div><hr /></div>
            <div><hr /></div>
            </BrowserRouter>
    </div>
}