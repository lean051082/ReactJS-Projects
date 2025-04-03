import { useActionState, use } from 'react';
import { OpinionsContext } from '../store/opinions-context';

function isNotEmpty(value) {
  return value.trim() !== '';
}

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function addNewOpinion(prevOpinionFormState, formData) {
    const userName = formData.get(`userName`);
    const title = formData.get(`title`);
    const body = formData.get(`body`);

    let errors = [];

    if (!isNotEmpty(userName)) {
      errors.push(`Please, enter a user name`);
    }

    if (!isNotEmpty(title)) {
      errors.push(`Please, enter a title`);
    }

    if (!isNotEmpty(body)) {
      errors.push(`Please, enter a your opinion`);
    }

    if (errors.length > 0) {
      return {
        errors,
        enteredValues: {
          userName,
          title,
          body,
        },
      };
    }

    await addOpinion({ userName, title, body });

    return { errors: null };
  }

  const [opinionFormState, opinionFormAction, pending] = useActionState(
    addNewOpinion,
    {
      errors: null,
    }
  );
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={opinionFormAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={opinionFormState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={opinionFormState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={opinionFormState.enteredValues?.body}
          ></textarea>
        </p>
        {opinionFormState.errors && (
          <ul className="errors">
            {opinionFormState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <p className="actions">
          <button type="submit" disabled={pending}>
            Submit
          </button>
        </p>
      </form>
    </div>
  );
}
