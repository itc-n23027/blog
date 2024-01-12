import Meta from 'components/meta'
import PostBody from 'components/post-body'
import Container from 'components/container'
import Hero from 'components/hero'
import Contact from 'components/contact'
import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar
} from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

const About = () => {
  return (
    <Container>
      <Meta
        pageTitle='アバウト'
        pageDesc='About development activities'
        pageImg={eyecatch.src}
        pageImgW={eyecatch.width}
        pageOmgH={eyecatch.height}
      />
      <Hero title='About' subtitle='Aboutdevelopment activities' />
      <figure>
        <Image
          src={eyecatch}
          alt=''
          layout='responsive'
          sizes='(min-width: 1152px) 1152px, 100vw'
        />
      </figure>
      <TwoColumn>
        <TwoColumnMain>
          <PostBody>
            <p>
              Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインな
              ど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案
              し続けています。
            </p>
            <h2>モノづくりで目指していること</h2>
            <p>
              モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいこと
              を取り入れながら、ユーザーにマッチした提案を実現するのが目標です。たくさんの開発・提供
              が数多くありますが、特にそこを磨く作業に力を入れています。
            </p>
            <p>
              単純に形にするだけでなく、作る過程や、なぜそのようにしたのかを大事にしながらものづくり
              をしています。毎回課題解決テーマをもって「モノ」と向き合い制作をし、フィードバックして
              もらうことで自分の中にあるモヤモヤを言葉にして「問い」への答えを出しています。
            </p>
            <h3> 新しいことへのチャレンジ</h3>
            <p>
              今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなことでも
              いいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み
              出すようなモノづくりは、これからも続けていきたいです。
            </p>
          </PostBody>
        </TwoColumnMain>
        <TwoColumnSidebar>
          <Contact />
        </TwoColumnSidebar>
      </TwoColumn>
    </Container>
  )
}
export default About
