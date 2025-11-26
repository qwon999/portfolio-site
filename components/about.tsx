export function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">About</h2>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-pretty">
              저는{" "}
              <strong className="text-foreground font-semibold">
                연구와 서비스 개발을 모두 경험한 에이전트 개발자, 하규원
              </strong>
              입니다.
              <br />
              KIST 양자정보연구단과 SKKU 동역학 연구실에서 단일 큐비트 제어, 양자 측정 정밀도 향상 등의 주제로{" "}
              복잡한 양자 시스템을 모델링하고, 정량적인 지표를 정의해 개선 방향을 도출하는 연구를 수행했습니다.
            </p>

            <p className="text-pretty">
              이후에는 Java/Spring/React 기반의 풀스택 개발과 알고리즘 트레이닝을 통해,{" "}
              <strong className="text-foreground font-semibold">실제 유저가 사용하는 웹 서비스</strong>와{" "}
              <strong className="text-foreground font-semibold">LLM 기반 기능</strong>을 직접 설계·구현해왔습니다.
              <br />
              일상을 기록하고 감정을 편지로 남기는 서비스인 &quot;See You Letter&quot;, 로그 기반 분석 서비스인
              &quot;APILog&quot; 프로젝트를 진행하며{" "}
              <strong className="text-foreground font-semibold">
                &quot;AI가 사람을 대신해 할 수 있는 일의 범위를 어디까지 넓힐 수 있을까?&quot;
              </strong>
              를 꾸준히 실험하고 있습니다.
            </p>

            <div className="pt-8 border-t border-border/50">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Career Vision</h3>
              <p className="text-pretty mb-4">저의 커리어 방향은 한 문장으로 요약할 수 있습니다.</p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-4 text-foreground font-semibold text-xl">
                &quot;정의롭고 지속가능한 문제 해결을 위해, AI가 대신할 수 있는 일을 끝까지 자동화한다.&quot;
              </blockquote>
            </div>

            <p className="text-pretty">
              고전적인 업무들이 AI로 대체되는 흐름은 피하기 어렵다고 생각합니다. 그래서 저는{" "}
              <strong className="text-foreground font-semibold">
                &quot;AI 이후의 세상에서 인간은 무엇을 해야 하는가&quot;
              </strong>
              를 꾸준히 고민해왔고, 그 과정에서{" "}
              <strong className="text-foreground font-semibold">Human-like Agent</strong>라는 비전에 깊이 공감하게
              됐습니다.
            </p>

            <div className="pl-6 space-y-3 border-l-2 border-primary/30">
              <p className="text-pretty">
                인간이 반복적으로 수행하던 업무를{" "}
                <strong className="text-foreground font-semibold">에이전트에게 위임</strong>하고,
              </p>
              <p className="text-pretty">사람은 더 본질적인 문제 정의와 가치 판단에 집중할 수 있게 만드는 것,</p>
              <p className="text-pretty">
                그 사이를 잇는{" "}
                <strong className="text-foreground font-semibold">
                  도구·인프라·로그·파이프라인을 설계하고 구현하는 개발자
                </strong>
                가 되는 것이 저의 목표입니다.
              </p>
            </div>

            <p className="text-pretty">
              Human-like Agent를 만드는 일은 난이도가 높은 도전이지만, 그렇기 때문에 오히려 제가 가장 몰입할 수 있는
              문제라고 생각합니다. 앞으로도{" "}
              <strong className="text-foreground font-semibold">LLM·도구·인프라를 연결하는 에이전트 개발자</strong>로서,
              세상의 일하는 방식을 한 단계씩 바꾸는 일에 기여하고 싶습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
