import { Image } from 'react-datocms';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import  Interweave  from 'interweave';
import TweetImg from './assets/twitter.png';

export default function Home() {

  // const [result, setResult] = useState();
  // const [check, setCheck] = useState(false)
  // const token = '33d9110308503971788700d6bfd19e';

  const data = {
    "id": "48014089",
    "createdAt": "2021-07-15T10:46:16Z",
    "maincontent": [
      {
        "id": "48015160",
        "contenxtHeaderText": "How to stop tooth pain fast ?",
        "contenxtHeaderDescription": "",
        "headerimage": {
          "alt": "sample text",
          "title": "sample",
          "url": "https://www.datocms-assets.com/50930/1626347997-image-46.png"
        }
      },
      {
        "ContentsubheaderText": "Clove Oil"
      },
      {
        "ContentparagraphRecord": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "This remedy has been recommended for generations – your grandparents have also probably told you this quick fix when you wanted to know how to stop tooth pain fast. Pain and swelling occur due to the inflamed pulpal tissue. Clove oil relieves you of this by virtue of the active ingredient – eugenol, present in it. This helps to bring down the pain and irritation as it has the properties of an analgesic. You can splash 2-3 drops of clove oil on a small ball of cotton and apply it to the affected tooth."
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      {
        "ContentsubheaderText": "Warm Saline Gargles"
      },
      {
        "ContentparagraphRecord": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "This is considered one of the most effective at-home remedies to relieve tooth pain and swollen gums. Add 2-3 teaspoons of salt in warm water and rinse at least 4-5 times a day."
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      {
        "id": "48015191",
        "tweetText": "The salt helps to kill the bacteria in the mouth & is also  effective in controlling plaque formation."
      },
      {
        "ContentsubheaderText": "Peppermint Oil"
      },
      {
        "ContentparagraphRecord": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "One of the common home remedies for tooth infection is using peppermint oil. This essential oil has antibacterial and anti-inflammatory properties. Add a few drops on a small cotton ball and press it to your infected tooth. Another option is to add a teaspoon of dried peppermint leaves in a cup of boiling water and steep it for 20 minutes. After cooling it down, it can be swished around in the mouth & then spat out or swallowed. A used tea bag can also be pressed against the affected area to relieve pain."
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      {
        "id": "48015199",
        "text": "<p style='font-size:24px;'>The above-mentioned home remedies provide only temporary relief from pain. It is always advised to <a href=\"https://google.com\">visit the dentist</a> to treat the underlying cause of the problem.</p>\n"
      },
      {
        "id": "48015254",
        "contenxtHeaderText": "How to whiten those teeth of yours?",
        "contenxtHeaderDescription": "<p style='font-size:24px;'>Home remedies for the teeth are not restricted just to tooth aches – sometimes you want those shiny pearls and you keep wondering how can one whiten their teeth from their home?</p>\n",
        "headerimage": {
          "alt": "data",
          "title": "sample",
          "url": "https://www.datocms-assets.com/50930/1626347953-image-47-1.png"
        }
      },
      {
        "ContentsubheaderText": "Practice effective oral hygiene"
      },
      {
        "ContentparagraphRecord": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "This is the most obvious suggestion to keep your teeth white. Brushing twice a daily, flossing and regular use of a mouth rinse can help maintain good oral health. Patients are also advised to visit the dentist every 4-6 months for scaling and root planing which helps to remove plaque, tartar and other stain s present on the surface of the teeth which cannot be removed by home remedies and require professional cleaning."
                    }
                  ]
                }
              ]
            }
          }
        }
      },
      {
        "ContentsubheaderText": "Brushing with baking soda"
      },
      {
        "ContentparagraphRecord": {
          "value": {
            "schema": "dast",
            "document": {
              "type": "root",
              "children": [
                {
                  "type": "paragraph",
                  "children": [
                    {
                      "type": "span",
                      "value": "Baking soda is a mild abrasive which can be used to remove surface stains on your teeth. Baking soda also creates an alkaline environment which prevents bacterial growth. A significant change can be observed after repeating the process for some time. A paste can be formed by mixing 1 teaspoon of baking soda with 2 teaspoons of water. You can also start opting for toothpastes containing baking soda, as those have shown more effective results in stain removal and whitening as compared to toothpastes with no baking soda formulations."
                    }
                  ]
                }
              ]
            }
          }
        }
      }
    ],
    "summary": "<p style='font-size:24px;'>All of us at some point have felt our tooth ache – and we wonder How to stop tooth pain fast at home? First let's understand why tooth pain arises? This is due to many factors, the most common being dental decay and trauma. Your teeth become sensitive when you consume hot, cold and sugary food. <a style='color:blue' href=\"https://smiles.ai\">You may be</a> required to visit a dentist to treat the underlying cause because if the severity of the tooth ache is making it hard for you to sleep – it is a great warning sign. \nSometimes, you just want immediate tooth nerve pain relief or you want to know how to stop tooth pain fast? What is the strongest toothache medicine for instant pain relief? Well, we have good news! There are some home remedies for tooth sensitivity and pain that can provide relief when immediate dental treatment is not possible. If your tooth is giving you trouble – here's what you can do!</p>\n",
    "title": "Home Dental remedies for your teeth",
    "articleending": "<p style='font-size:24px;'>Please be advised that these home remedies can be adopted for instant relief or when seeking immediate dental treatment is not possible. Please do not use these as permanent solutions and always remember to <a href=\"https://smiles.ai\">consult your dentist</a> to treat the underlying cause of the issue!</p>\n",
    "mainimage": {
      "responsiveImage": {
        "src": "https://www.datocms-assets.com/50930/1626345928-image-45.png",
        "width": 1440,
        "height": 821,
        "aspectRatio": 1.753958587088916,
        "base64": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBhMPCAgPCg4WFA0NDQ0ODREOFhEYFxUZGBYVFhUaHysjJh0oHRUiJDUlKC0vMjIyGSI4PTcwPCsxMi8BCgsLDg0OFRAQFjscFxwvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL//AABEIAA4AGAMBIgACEQEDEQH/xAAYAAACAwAAAAAAAAAAAAAAAAAABQIEB//EAB4QAAICAgIDAAAAAAAAAAAAAAACAQMEMRMhBRES/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQT/xAAWEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/ANKsvhoKs+RWieyTx6UWZVX02ym0Gi5636AV4y8epANL/9k=",
        "srcSet": "https://www.datocms-assets.com/50930/1626345928-image-45.png?dpr=0.25 360w,https://www.datocms-assets.com/50930/1626345928-image-45.png?dpr=0.5 720w,https://www.datocms-assets.com/50930/1626345928-image-45.png?dpr=0.75 1080w,https://www.datocms-assets.com/50930/1626345928-image-45.png 1440w"
      }
    }
  }
  // console.log("er", data)

  const Header = (props) => {
    return (
      <div>
        <h2 style={{ color: '#5AAFE5', fontSize: '32px' }}>{props.content.contenxtHeaderText}</h2>
        <Interweave content={props.content.contenxtHeaderDescription} />
      </div>
    )
  }

  const SubHeader = (props) => {
    return (
      <div>
        <h3 style={{ color: '#21516B', fontSize: '24px' }}>{props.content.ContentsubheaderText}</h3>
      </div>
    )
  }

  const Paragraph = (props) => {
    return (
      <div>
        {props.content.map((val, key) => {
          return (
            <div >
              <p style={{ color: '#21516B', fontSize: '24px' }}>{val.value}</p>
            </div>
          )
        })}
      </div>
    )
  }

  const TweetText = (props) => {
    return (
      <div style={{ backgroundColor: '#DEDCF4', padding: '14px', borderRadius: '10px' }}>
        <img src='pages/assets/twit.svg' width='40px' height='40px' />
        <p style={{ color: '#192A33', fontSize: '24px' }}>{props.content.tweetText}</p>
        <Button style={{ backgroundColor: '#1DA1F2', color: '#ffffff', textTransform: 'none', height: '30px' }}>Tweet</Button>
      </div>
    )
  }

  const Quote = (props) => {
    return (
      <div style={{ backgroundColor: '#F2CCD0', padding: '10px', borderRadius: '10px' }}>
        <Interweave content={props.content.text} />
      </div>
    )
  }

  const ArticleEnding = (props) => {
    return (
      <div>
        <Interweave content={props.content} />
      </div>
    )
  }



  const SideBar = () => {
    return (
      <div style={{ marginTop: '10px', paddingBottom: '20px'}}>
        <div style={{ backgroundColor: '#5AAFE5', paddingTop: '1px', paddingLeft: '20px', paddingRight: '15px', paddingBottom: '20px' }}>
          <p style={{ color: '#ffffff', fontSize: '24px', fontWeight: 'bold' }}>Top Posts</p>
          <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '75px', height: '75px', backgroundColor: '#b2b2b2' }} />
            <p style={{ fontSize: '18px', marginLeft: '18px'}}>Home Dental remedies for your teeth</p>
          </div>
          <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '75px', height: '75px', backgroundColor: '#b2b2b2' }} />
            <p style={{ fontSize: '18px', marginLeft: '18px'}}>Home Dental remedies for your teeth</p>
          </div>
          <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '75px', height: '75px', backgroundColor: '#b2b2b2' }} />
            <p style={{ fontSize: '18px', marginLeft: '18px'}}>Home Dental remedies for your teeth</p>
          </div>
          <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '75px', height: '75px', backgroundColor: '#b2b2b2' }} />
            <p style={{ fontSize: '18px', marginLeft: '18px'}}>Home Dental remedies for your teeth</p>
          </div>
          <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
            <img style={{ width: '75px', height: '75px', backgroundColor: '#b2b2b2' }} />
            <p style={{ fontSize: '18px', marginLeft: '18px'}}>Home Dental remedies for your teeth</p>
          </div>
        </div>
      </div>
    )
  }


  return (
    <div >
      {data &&
        <div>
          <Image data={data.mainimage.responsiveImage} />
          <div style={{paddingLeft: '32px', marginTop: '50px'}}>
            <div class='flexbox-container' style={{ display: 'flex', flexDirection: 'row' }}>
              <p>{data.createdAt}</p>
              <p style={{marginLeft: '10px'}}>||</p>
              <p style={{ color: '#5AAFE5', marginLeft: '10px' }}>Dr. Amaeet Sanghi</p>
            </div>
            <h1 style={{ color: '#5AAFE5' }}>{data.title}</h1>
            <p style={{ color: '#21516B', fontSize: '24px', fontWeight: 'bold' }}>Summary:</p>
          </div>
          <Grid container spacing={3} style={{paddingLeft: '32px', paddingRight: '32px', marginTop: '50px'}}>
            <Grid item sm={8} xs={12}>
              <div style={{ backgroundColor: '#EBF7F5', padding: '25px', borderRadius: '10px' }}>
                <Interweave content={data.summary} />
              </div>
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '40px' }}>
                <Button style={{ backgroundColor: '#21516B', color: '#ffffff', fontSize: '24px', padding: '10px', paddingLeft: '30px', paddingRight: '30px', borderRadius: '30px' }}>Book free Consultation</Button>
              </div>
              {data.maincontent.map((val, key) => {
                return (
                  <div>
                    {val.contenxtHeaderText && <Header content={val} />}
                    {val.ContentparagraphRecord && <Paragraph content={val.ContentparagraphRecord.value.document.children[0].children} />}
                    {val.ContentsubheaderText && <SubHeader content={val} />}
                    {val.tweetText && <TweetText content={val} />}
                    {val.text && <Quote content={val} />}
                  </div>
                )
              })}
              <ArticleEnding content={data.articleending} />
              <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '40px' }}>
                <Button style={{ backgroundColor: '#21516B', color: '#ffffff', fontSize: '24px', padding: '10px', paddingLeft: '30px', paddingRight: '30px', borderRadius: '30px' }}>Book free Consultation</Button>
              </div>
            </Grid>
            <Grid item sm={4} xs={12}>
              <SideBar />
            </Grid>
          </Grid>
        </div>
      }

    </div>
  )
}
