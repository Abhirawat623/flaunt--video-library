import { FetchedCards } from "./FetchedCards";
export const FetchedPlaylistCards=({items})=>{
const {playlistName}=items
return(
    <div>
        <span>{playlistName}</span>
        <FetchedCards itemIds={items}/>
    </div>
)



}