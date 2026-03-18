export function TabButton(props: { children: React.ReactNode }) { // children property is used to pass the content declared in the parent component
  return (
    <li>
      <button>
        <span>{props.children}</span>
      </button>
    </li>
  );
}
