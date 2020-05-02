const Stats = () => {
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
