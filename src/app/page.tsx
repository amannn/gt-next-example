import {LocaleSelector} from 'gt-next';
import {T} from 'gt-next';

export default function Home() {
  return (
    <main>
      <div>
        <T>Hello world!</T>
      </div>
      <LocaleSelector />
    </main>
  );
}
