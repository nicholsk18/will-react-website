import { useState, useEffect } from "react";

const Stats = () => {
    const [stats, setStats] = useState();

    useEffect(() => {
        async function getStats() {
            await fetch(
                "https://statdata.pgatour.com/players/51567/2020results.json"
            )
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    }, [stats]);
    return (
        <div className="row">
            <div className="col-sm-12 col-md-3 text-center">
                <div className="card">
                    <div className="card-header">Tour Rank</div>
                    <div className="card-body">rank</div>
                </div>
            </div>

            <div className="col-sm-12 col-md-3 text-center">
                <div className="card my-1 my-sm-0">
                    <div className="card-header">Offical Points</div>
                    <div className="card-body">Points</div>
                </div>
            </div>

            <div className="col-sm-12 col-md-3 text-center">
                <div className="card my-1 my-sm-0">
                    <div className="card-header">Scoring Average</div>
                    <div className="card-body">Scoring avg</div>
                </div>
            </div>

            <div className="col-sm-12 col-md-3 text-center">
                <div className="card">
                    <div className="card-header">
                        Events Played in "year here"
                    </div>
                    <div className="card-body">events</div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
