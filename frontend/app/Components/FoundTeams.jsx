async function getTeams() {
  
  try {
    let response = fetch("/api/user", {cache: "no-store"});

    if (!response.ok) {
      return [];
    }
    return response.json();

  } catch (err) {
    return [];
  }
}

const FoundTeams = async () => {

  const teams = await getTeams();
  return (
    <div className="w-full bg-zinc-500">
      <div className="grid grid-cols-1 gap-[5%] p-[5%]">
        {teams.map((team)=>(
        <div className="p-[5%] border-[0.1em] border-[#515151]" key={team._id}>
          <h2 className="text-[#fff]">{team.title}</h2>

            {team.members.map((member, index)=>(
              <span className="block text-[#fff]" key={index}>{member}</span>
            ))}
        </div>
        ))}
      </div>
    </div>
  )
}

export default FoundTeams;
