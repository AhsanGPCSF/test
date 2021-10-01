import { connect } from "react-redux";
import { useRef } from "react";
import store from "./Ads_store";
import './reduxAds.css';
import { Link } from "react-router-dom";

export function CreateAd() {
    let Nname = useRef();
    let Nprice = useRef();
    let Nimg = useRef();

    const saveAd = () => {
        let newAd = {
            pic: URL.createObjectURL(Nimg.current.files[0]),
            name: Nname.current.value,
            price: Nprice.current.value,
        }
        store.dispatch({
            type: "CREATE_AD",
            ads: newAd,
        })
    }
    return  <div className="create-new">
    <h1 id="name">Create New Ad</h1>
    <input ref={Nname} type="text" placeholder="Name" /><br></br>
    <input ref={Nprice} type="text" placeholder="Price" /><br></br><br></br>
    <input ref={Nimg} type="file" /><br></br>
    <Link to="/ads"> <button onClick={saveAd} className="del-Ad">Create Ad</button></Link><br></br><br></br>
</div>
    
}

export function AdsData(props) {

    

    return <>
       

        <div className="ad-box">
            {
                props.AdsDataContainer.ads.map((ad, i) => {
                    return <table id="b" border="1">
                        <tr>

                            <img className="ads-img" src={ad.pic} alt="" />
                        </tr>
                        <tr id="name">
                            {ad.name}

                        </tr>
                        <tr id="price">
                            RS: {ad.price}/-

                        </tr>
                        <tr>
                            <button onClick={((i) => () => {
                                store.dispatch({
                                    type: "DELETE_AD",
                                    index: i,
                                })
                            })(i)} className="del-Ad">Delete</button>

                        </tr>
                    </table>
                })
            }
        </div>
        <hr />
        <hr />
        <hr />
        <hr />
    </>

}

export let AdsData1 = connect((myAdsStore) => {
    return myAdsStore;
})(AdsData);