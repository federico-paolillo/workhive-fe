"use client";

export type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  const rawError = JSON.stringify(props.error, null, 4);
  const { name, message, cause, stack } = props.error;

  return (
    <>
      <h1>Something broke!</h1>
      <p>
        {name}: {message}
      </p>
      <h2>Details</h2>
      <h3>Cause</h3>
      <p>{String(cause)}</p>
      <h3>Stack Trace</h3>
      <p>{String(stack)}</p>
    </>
  );
}
