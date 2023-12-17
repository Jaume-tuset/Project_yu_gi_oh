import { updateData,createData,getData,fileRequest,getFileRequest } from "./http";

export{saveGame,getGame, updateGame,updateGamePlayer,getAllGames,getAvailableGames};

const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtbHpqeHN5cGRnbXlsb2F4b3plIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc2NjcwNzIsImV4cCI6MjAxMzI0MzA3Mn0.CaZFMPDPIlHDMIl5lQaE5xaGWgPi5bvtpXdZvkYFLuk";

function saveGame(players,state){
    const token=localStorage.getItem("acces_token");
    const { player1,player2 } = players;
    const newGame=createData('games',token,{
        players:[player1,player2],
        player1,player2,game_state:state,
    });
    return newGame;
}
async function updateGame(state, gameId) {
    const token = localStorage.getItem('access_token');
    await updateData(`games?id=eq.${gameId}`, token, { game_state: state });
  }
  
  async function updateGamePlayers(players, gameId) {
    const token = localStorage.getItem('access_token');
    await updateData(`games?id=eq.${gameId}`, token, { players: players });
  }
  
  
  async function getGame(id) {
    const token = localStorage.getItem('access_token');
    const data = await getData(`games?id=eq.${id}&select=*`, token);
    return data[0];
  }
  
  async function getAllGames(uid) {
    const token = localStorage.getItem('access_token');
    const data = await getData(`games?or=(player1.eq.${uid},player2.eq.${uid},player3.eq.${uid},player4.eq.${uid})&select=*`, token);
    return data;
  }
  
  async function getAvailableGames(uid) {
    const token = localStorage.getItem('access_token');
    let data = await getData('games?started.eq.false&select=*', token);
    data = data.filter((game) => game.player1 != uid && game.player1 != uid && game.player1 != uid && game.player1 != uid);
    return data;
  }