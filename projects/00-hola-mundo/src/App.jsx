import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export function App() {
    const format = (userName) => `@${userName}`

    return (
        <section className="App">
            <TwitterFollowCard formatUserName={format} userName="elrubius" initialIsFollowing={true}>
                Ruben Angel
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="lolito" initialIsFollowing={false}>
                Lolito Garcia
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} initialIsFollowing={false}>
                Vegeeetta777
            </TwitterFollowCard>
        </section>
    )
}