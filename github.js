class GitHub {
    constructor() {
        this.client_id = 'fe9140f180cc2628278e';
        this.client_secret = 'fff6248842fb81344dc47741201ea5c92465816e';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        return {
            profile
        }
    }
}