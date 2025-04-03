import { use } from 'react';
import { OpinionsContext } from '../store/opinions-context.jsx';
import { useActionState } from 'react';
import { useOptimistic } from 'react';

export function Opinion({ opinion: { id, title, body, userName, votes } }) {
  const { upvoteOpinion, downvoteOpinion } = use(OpinionsContext);

  const [formStateUpvote, formActionUpvote, pendingUpvote] = useActionState(
    upvote,
    null
  );
  const [formStateDownvote, formActionDownvote, pendingDownvote] =
    useActionState(downvote, null);

  const [optimisticVotesState, setVotesOptimistically] = useOptimistic(
    votes,
    (prevVotes, mode) => (mode === 'up' ? prevVotes + 1 : prevVotes - 1)
  );

  async function upvote() {
    setVotesOptimistically('up');
    await upvoteOpinion(id);
  }

  async function downvote() {
    setVotesOptimistically('down');
    await downvoteOpinion(id);
  }
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button
          formAction={formActionUpvote}
          disabled={pendingUpvote || pendingDownvote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotesState}</span>

        <button
          formAction={formActionDownvote}
          disabled={pendingDownvote || pendingUpvote}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
