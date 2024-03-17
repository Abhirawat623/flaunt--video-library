import { FetchedCards } from "./FetchedCards";
export const FetchedPlaylistCards=({items})=>{
const {playlistName}=items
return(
    <div>
        <div className="w-full bg-slate-800 text-center text-white">{playlistName}</div>
        <FetchedCards itemIds={items}/>
    </div>
)



}