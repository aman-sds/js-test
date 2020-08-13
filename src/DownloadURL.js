import React from "react";
import LocalStorageService from './services/localstorage.service';

class PrimeNumber extends React.Component {
    state = { fetching: false, id: 1, repoNames: [] };

    componentDidMount() {
        //
    }

    handleChange = (e) => {
        this.setState({ id: e.target.value });
    }

    getData = async () => {
        const { id } = this.state;
        let alreadyFetchedData = LocalStorageService.getItem(id);
        if (!alreadyFetchedData) {
            this.setState({ fetching: true });
            const response = await fetch(`https://api.github.com/repositories?since=${id}`)
            const gitHubRepositories = await response.json()
            let repoNames = gitHubRepositories.map(repo => repo.name)
            LocalStorageService.setItem(id, repoNames);
            this.setState({ repoNames, fetching: false });
        } else {
            this.setState({ repoNames: alreadyFetchedData });
        }
    }
    render() {
        const { id, repoNames } = this.state;
        return (
            <>
                <>
                    <label htmlFor="gitrepoIdNumber">Git Repo Id Number</label>
                    <input id="gitrepoIdNumber" type='number' value={id} onChange={(e) => this.handleChange(e)} />
                    <button onClick={this.getData}>Get Data</button>
                    <p>Note: Please use numbers like 1, 27, 65 i.e some greater difference than previous number as github seems to return similar response of consecutive numbers often.</p>
                </>
                <>
                    {this.state.fetching && <p className="highlight">Fetching data from github server ....</p>}
                </>
                <>
                    {
                        repoNames.map((repo, index) => <p key={index}>{repo}</p>)
                    }
                </>
            </>
        )
    }
}

export default PrimeNumber;