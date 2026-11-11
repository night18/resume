<template>
  <div class="page">
    <header class="hero">
      <div class="model-id">chunwei.org / <b>chiang-v{{ version }}</b></div>
      <h1>{{ name }}</h1>
      <p class="headline">{{ headline }}</p>
      <ul class="tags" aria-label="Topics">
        <li v-for="tag in tags" :key="tag.label" :class="{ joke: tag.joke }">{{ tag.label }}</li>
      </ul>
      <nav class="links" aria-label="Contact and profiles">
        <a class="btn primary" :href="'/' + resume_url" target="_blank" rel="noopener">Résumé (PDF)</a>
        <a class="btn" :href="social_media.linkedin" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn" :href="social_media.github" target="_blank" rel="noopener">GitHub</a>
        <a class="btn" :href="social_media.gscholar" target="_blank" rel="noopener">Scholar</a>
        <a class="btn" :href="'mailto:' + email">Email</a>
      </nav>
    </header>

    <section class="playground" aria-labelledby="try-heading">
      <h2 id="try-heading" class="playground-label">Try a prompt (canned answers, no model was harmed)</h2>
      <div class="prompt-list">
        <button
          v-for="(p, i) in prompts"
          :key="p.q"
          type="button"
          class="prompt"
          :class="{ on: i === picked }"
          :aria-pressed="i === picked ? 'true' : 'false'"
          @click="picked = i"
        >
          {{ p.q }}
        </button>
      </div>
      <p class="answer" aria-live="polite"><span class="caret" aria-hidden="true">&gt; </span>{{ prompts[picked].a }}</p>
    </section>

    <section aria-labelledby="desc-heading">
      <h2 id="desc-heading" class="md">## Model description</h2>
      <p class="prose">{{ summary }}</p>
      <p class="prose">
        I received my Ph.D. in Computer Science from Purdue University, advised by
        <a href="http://mingyin.org/">Dr. Ming Yin</a>, where my research covered
        <b>human-AI interaction</b>, <b>applied machine learning</b>, and
        <b>the bias in machine learning systems</b>. Prior to Purdue, I worked in a technology company as an
        Android developer. I hold a Master of Computer Science from West Virginia University, and a Bachelor of
        Management in Information Management from National Central University in Taiwan.
      </p>
    </section>

    <section aria-labelledby="history-heading">
      <h2 id="history-heading" class="md">## Version history</h2>
      <p class="hint">Tap a role for details.</p>
      <div class="rows">
        <template v-for="job in jobs" :key="job.name">
          <details v-for="position in job.positions" :key="job.name + position.title" class="row">
            <summary>
              <span class="what"><b>{{ job.name }}</b> · {{ position.title }}</span>
              <span class="when">{{ span(position) }}</span>
            </summary>
            <p v-if="job.location" class="where">{{ job.location }}</p>
            <ul class="duties">
              <li v-for="duty in position.duty" :key="duty">{{ duty }}</li>
            </ul>
            <p v-for="link in position.links || []" :key="link.href" class="more-link">
              <a :href="link.href" target="_blank" rel="noopener">{{ link.label }}</a>
            </p>
          </details>
        </template>
      </div>
    </section>

    <section aria-labelledby="training-heading">
      <h2 id="training-heading" class="md">## Training data</h2>
      <div class="rows">
        <div v-for="degree in degrees" :key="degree.name" class="row plain">
          <span class="what"><b>{{ degree.name }}</b> · {{ degree.level }}, {{ degree.major }}</span>
          <span class="when">{{ degree.start_year }} – {{ degree.end_year }}</span>
        </div>
      </div>
    </section>

    <section aria-labelledby="eval-heading">
      <h2 id="eval-heading" class="md">## Evaluation</h2>
      <p class="hint">
        Peer-reviewed. {{ publication_stats }}
        <a :href="social_media.gscholar" target="_blank" rel="noopener">Google Scholar</a>
      </p>
      <div class="papers">
        <article v-for="paper in shownPapers" :key="paper.title" class="paper">
          <p class="venue">{{ venue(paper) }}</p>
          <h3>
            <a :href="'/papers/' + paper.href" target="_blank" rel="noopener">{{ paper.title }}</a>
          </h3>
          <p class="authors">
            <template v-for="(author, i) in paper.authors" :key="author">
              <b v-if="author === name">{{ author }}</b><template v-else>{{ author }}</template
              ><template v-if="i < paper.authors.length - 1">, </template>
            </template>
          </p>
          <p v-if="paper.note" class="note">{{ paper.note }}</p>
          <p v-if="paper.supplementary" class="extras">
            <a
              v-for="supp in paper.supplementary"
              :key="supp.href"
              :href="'/papers/' + supp.href"
              target="_blank"
              rel="noopener"
              >{{ supp.key }}</a
            >
          </p>
        </article>
      </div>
      <button type="button" class="btn more" :aria-expanded="showAll ? 'true' : 'false'" @click="showAll = !showAll">
        {{ showAll ? "Show selected only" : "Show all " + papers.length + " papers" }}
      </button>
    </section>

    <section aria-labelledby="honors-heading">
      <h2 id="honors-heading" class="md">## Honors</h2>
      <p class="prose">{{ honors }}</p>
    </section>

    <section aria-labelledby="skills-heading">
      <h2 id="skills-heading" class="md">## Skills</h2>
      <dl class="skills">
        <template v-for="skill in skills" :key="skill.area">
          <dt>{{ skill.area }}</dt>
          <dd>{{ skill.items }}</dd>
        </template>
      </dl>
    </section>

    <section aria-labelledby="changelog-heading">
      <h2 id="changelog-heading" class="md">## Changelog</h2>
      <div class="rows">
        <div v-for="item in news" :key="item.date" class="log">
          <span class="when">{{ item.date }}</span>
          <span>{{ item.title }}</span>
        </div>
      </div>
    </section>

    <section aria-labelledby="limits-heading">
      <h2 id="limits-heading" class="md">## Known limitations</h2>
      <ul class="limits">
        <li v-for="limit in limitations" :key="limit">{{ limit }}</li>
      </ul>
    </section>

    <footer>
      <span>contact: <a :href="'mailto:' + email">{{ email }}</a></span>
      <span>last updated: {{ update_date }}</span>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import {
  name,
  email,
  headline,
  summary,
  publication_stats,
  honors,
  skills,
  tags,
  prompts,
  limitations,
  resume_url,
  social_media,
  update_date,
  news,
  degrees,
  jobs,
  papers,
} from "@/components/constants";

const SELECTED_COUNT = 3;

const picked = ref(0);
const showAll = ref(false);

// "Feb 20, 2025" -> "2025"; falls back to nothing if the date has no year.
const version = (update_date.match(/\d{4}/) || [""])[0];

const shownPapers = computed(() => (showAll.value ? papers : papers.slice(0, SELECTED_COUNT)));

function span(position) {
  if (position.start_year === position.end_year) return position.start_year;
  return position.start_year + " – " + position.end_year;
}

function venue(paper) {
  // A few abbreviations in constants.js carry a trailing colon.
  const abbreviation = (paper.abbreviation || "").replace(/:\s*$/, "");
  return abbreviation ? abbreviation + " " + paper.publish_year : paper.full_publisher + " " + paper.publish_year;
}
</script>

<style scoped>
.page {
  max-width: 880px;
  margin: 0 auto;
  padding: 24px 24px 72px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

p,
h1,
h2,
h3,
ul {
  margin: 0;
}

/* Hero */
.hero {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.model-id {
  font-family: var(--mono);
  font-size: 15px;
  color: var(--ink-mute);
  overflow-wrap: anywhere;
}

.model-id b {
  color: var(--ink);
  font-weight: 700;
}

h1 {
  font-family: var(--display);
  font-weight: 700;
  font-size: clamp(38px, 7vw, 60px);
  line-height: 1.02;
  letter-spacing: -0.03em;
}

.headline {
  font-size: 20px;
  line-height: 1.4;
  font-weight: 500;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
  list-style: none;
}

.tags li {
  font-family: var(--mono);
  font-size: 13px;
  padding: 5px 10px;
  border-radius: 6px;
  background: var(--accent-wash);
  color: var(--accent-deep);
}

.tags li.joke {
  background: var(--amber-wash);
  color: var(--amber-ink);
}

.links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.btn {
  min-height: 44px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1.5px solid var(--ink);
  background: transparent;
  color: var(--ink);
  font-family: var(--body);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.btn:hover {
  background: var(--ink);
  color: var(--ground);
}

.btn.primary {
  background: var(--ink);
  color: var(--ground);
}

.btn.primary:hover {
  background: var(--accent-deep);
  border-color: var(--accent-deep);
}

.btn.more {
  align-self: flex-start;
}

/* Prompt box */
.playground {
  gap: 14px;
  padding: 20px;
  border-radius: 16px;
  background: var(--panel);
  color: var(--panel-ink);
}

.playground-label {
  font-family: var(--mono);
  font-weight: 400;
  font-size: 13px;
  color: var(--panel-mute);
}

.prompt-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.prompt {
  min-height: 44px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1.5px solid var(--panel-line);
  background: var(--panel-raised);
  color: var(--panel-ink);
  font-family: var(--mono);
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}

.prompt:hover {
  border-color: var(--amber);
}

.prompt.on {
  background: var(--amber);
  border-color: var(--amber);
  color: var(--ink);
}

.prompt:focus-visible {
  outline-color: var(--amber);
}

.answer {
  font-family: var(--mono);
  font-size: 15px;
  line-height: 1.6;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--panel-raised);
  min-height: 96px;
  overflow-wrap: anywhere;
}

.caret {
  color: var(--amber);
}

/* Section headings */
.md {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 16px;
  color: var(--accent);
}

.hint {
  font-size: 14px;
  color: var(--ink-mute);
}

.prose {
  max-width: 68ch;
}

.prose b {
  font-weight: 600;
}

/* Rows: version history, training data, changelog */
.rows {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--line);
}

.row {
  border-top: 1px solid var(--line);
}

.row summary,
.row.plain {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2px 24px;
  padding: 13px 0;
}

.row summary {
  cursor: pointer;
  list-style: none;
}

.row summary::-webkit-details-marker {
  display: none;
}

.row summary .what::before {
  content: "+ ";
  font-family: var(--mono);
  color: var(--accent);
}

.row[open] summary .what::before {
  content: "- ";
}

.what b {
  font-weight: 600;
}

.when {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink-mute);
}

.where {
  font-size: 14px;
  color: var(--ink-mute);
}

.duties {
  padding: 8px 0 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 16px;
  color: var(--ink-soft);
}

.log {
  display: grid;
  grid-template-columns: 110px minmax(0, 1fr);
  gap: 4px 20px;
  padding: 13px 0;
  border-top: 1px solid var(--line);
}

@media (max-width: 560px) {
  .log {
    grid-template-columns: minmax(0, 1fr);
  }
}

.more-link {
  padding: 0 0 16px 20px;
  font-size: 15px;
}

/* Skills */
.skills {
  margin: 0;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 10px 20px;
}

.skills dt {
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink-mute);
  padding-top: 3px;
}

.skills dd {
  margin: 0;
}

@media (max-width: 560px) {
  .skills {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }

  .skills dd {
    margin-bottom: 12px;
  }
}

/* Papers */
.papers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 14px;
}

.paper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px;
  border-radius: 14px;
  background: var(--card);
  border: 1px solid var(--line);
}

.venue {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
}

.paper h3 {
  font-family: var(--display);
  font-weight: 600;
  font-size: 18px;
  line-height: 1.25;
}

.paper h3 a {
  color: var(--ink);
  text-decoration: none;
}

.paper h3 a:hover {
  color: var(--accent);
  text-decoration: underline;
}

.authors {
  font-size: 14px;
  color: var(--ink-mute);
}

.authors b {
  font-weight: 600;
  color: var(--ink);
}

.note {
  font-size: 14px;
  font-weight: 600;
  color: var(--amber-ink);
}

.extras {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 14px;
}

.limits {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 4px 24px;
  font-family: var(--mono);
  font-size: 14px;
  color: var(--ink-mute);
  overflow-wrap: anywhere;
}
</style>
