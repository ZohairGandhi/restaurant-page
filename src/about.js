import "./style.css";
import { createDiv, createHeading, createPara } from "./home";

function createAbout(contentDiv) {
  const abtDiv = createDiv("abt-sec");
  const philHead = createHeading("h2", "Our Philosophy");
  const philSubHead = createHeading(
    "h3",
    "Why Fill Your Stomach When You Can Fill Your Pockets?"
  );
  const philPara1 = createPara(`
    At <b>Mini Munchies</b>, we embrace <em>minituarisation</em> in all
    things food. Our mission? To redefine the <em>meal</em> by ensuring it
    fits into your pocket. You thought full-sized meals were an art form?
    Nah, we've perfected the art of <em>concentration</em>.
  `);
  const philPara2 = createPara(`
    We don't believe in indulgence, only in light snacking that leaves you
    satisfied...but not really. It's about the experience, not the
    quantity. Why commit to a full meal when you can have a little nibble
    and keep your metabolism guessing?
  `);

  const testHead = createHeading(
    "h2",
    "Testimonials from Our Tiny-Obsessed Customers"
  );
  const testSecDiv = createDiv("test-sec");
  const test1 = createTest(`
      <b>
        “I came here for dinner, and by the time I was done, I was still
        hungry. But it was a great experience, though! 5 stars for the
        adventure!”
      </b>
      – <em>Confused But Happy</em>
  `);
  const test2 = createTest(`
      <b>
        “Mini Munchies changed my life. I used to overeat, but now I can
        under-eat with pride!”
      </b>
      – <em>Barely Full Bill</em>
  `);
  const test3 = createTest(`
    <b>
      “I could’ve eaten a full meal… but then again, who needs the
      hassle? Love the tiny bites, hate the tiny hunger pains after.”
    </b>
    – <em>Tiny Taster Tina</em>
  `);
  testSecDiv.append(test1, test2, test3);

  const endHead = createHeading("h2", "Join the Tiny Dining Revolution");
  const endPara1 = createPara(`
    Come for the bites, stay for the <em>confusion</em>. Whether you’re in
    the mood for tiny tacos, micro pasta, or the world’s smallest dessert
    (it's just a speck of chocolate, but it's gourmet),
    <b>Mini Munchies</b> is here for you.
  `);
  const endPara2 = createPara(`
    Take the first bite of a new era of dining—where nothing is too big to
    bite, but everything is small enough to regret.
  `);

  abtDiv.append(
    philHead,
    philSubHead,
    philPara1,
    philPara2,
    testHead,
    testSecDiv,
    endHead,
    endPara1,
    endPara2
  );
  contentDiv.innerHTML = ``;
  contentDiv.append(abtDiv);
}

function createTest(test) {
  const testDiv = document.createElement("div");
  testDiv.classList.add("test");
  testDiv.innerHTML = test;
  return testDiv;
}

export { createAbout as default };
