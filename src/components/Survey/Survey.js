import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Button, Form, Input, Label, FormGroup} from 'reactstrap';
import moment from 'moment';

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starttime: null,
      endtime: null,
      elapsedtime: null
    }
  }

  setStartTime = () => {
    this.setState({starttime: moment().format('h:mm:ss a')});
  }

  setEndTime = () => {
    let endtime = moment().format('h:mm:ss a');
    let starttime = moment(this.state.starttime, 'h:mm:ss a');
    this.setState({endtime: endtime, elapsedtime: moment().diff(starttime, 'minutes')});
  }

  render() {
    return(
      <div className='container'>
        <a href='/'>Logout</a>
        <br/>
        <a href='/home'>Back to select goals</a>
        <br/>
        <br/>
        <h4>Survey proper</h4>
        <Button onClick={this.setStartTime} color='info'>Start Time</Button>
        <p>Start Time: {this.state.starttime === null ? '' : this.state.starttime}</p>
        <h5>Please analyze these goal targets.</h5>
        <ListGroup>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.1</b> By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and Goal-4 effective learning outcomes</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.2</b> By 2030, ensure that all girls and boys have access to quality early childhood development, care and preprimary education so that they are ready for primary education</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.3</b> By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.4</b> By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.5</b> By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.6</b> By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.7</b> By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.8</b> Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, nonviolent, inclusive and effective learning environments for all</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.9</b> By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.1</b> By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births</p>
            <p><b>4.10</b> By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing states</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.1</b> By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and Goal-4 effective learning outcomes</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.2</b> By 2030, ensure that all girls and boys have access to quality early childhood development, care and preprimary education so that they are ready for primary education</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.3</b> By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.4</b> By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.5</b> By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.6</b> By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.7</b> By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.8</b> Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, nonviolent, inclusive and effective learning environments for all</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.9</b> By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.2</b> By 2030, end preventable deaths of newborns and children under 5 years of age, with all countries aiming to reduce neonatal mortality to at least as low as 12 per 1,000 live births and under-5 mortality to at least as low as 25 per 1,000 live births</p>
            <p><b>4.10</b> By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing states</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.1</b> By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and Goal-4 effective learning outcomes</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.2</b> By 2030, ensure that all girls and boys have access to quality early childhood development, care and preprimary education so that they are ready for primary education</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.3</b> By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.4</b> By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.5</b> By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.6</b> By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.7</b> By 2030, ensure that all learners acquire the knowledge and skills needed to promote sustainable development, including, among others, through education for sustainable development and sustainable lifestyles, human rights, gender equality, promotion of a culture of peace and non-violence, global citizenship and appreciation of cultural diversity and of culture’s contribution to sustainable development</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.8</b> Build and upgrade education facilities that are child, disability and gender sensitive and provide safe, nonviolent, inclusive and effective learning environments for all</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.9</b> By 2020, substantially expand globally the number of scholarships available to developing countries, in particular least developed countries, small island developing States and African countries, for enrolment in higher education, including vocational training and information and communications technology, technical, engineering and scientific programmes, in developed countries and other developing countries</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.3</b> By 2030, end the epidemics of AIDS, tuberculosis, malaria and neglected tropical diseases and combat hepatitis, water-borne diseases and other communicable diseases</p>
            <p><b>4.10</b> By 2030, substantially increase the supply of qualified teachers, including through international cooperation for teacher training in developing countries, especially least developed countries and small island developing states</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.1</b> By 2030, ensure that all girls and boys complete free, equitable and quality primary and secondary education leading to relevant and Goal-4 effective learning outcomes</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.2</b> By 2030, ensure that all girls and boys have access to quality early childhood development, care and preprimary education so that they are ready for primary education</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.3</b> By 2030, ensure equal access for all women and men to affordable and quality technical, vocational and tertiary education, including university</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.4</b> By 2030, substantially increase the number of youth and adults who have relevant skills, including technical and vocational skills, for employment, decent jobs and entrepreneurship</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.5</b> By 2030, eliminate gender disparities in education and ensure equal access to all levels of education and vocational training for the vulnerable, including persons with disabilities, indigenous peoples and children in vulnerable situations</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
          <ListGroupItem>
            <p><b>3.4</b> By 2030, reduce by one third premature mortality from non-communicable diseases through prevention and treatment and promote mental health and well-being</p>
            <p><b>4.6</b> By 2030, ensure that all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy</p>
            <Form>
              <FormGroup>
                <Label for='score'>Score</Label>
                <Input type='number' name='score' id='score' max='2' min='-2' placeholder='0'/>
              </FormGroup>
              <FormGroup>
                <Label for='explain'>Please explain your answer.</Label>
                <Input type='text' name='explain' id='explain'/>
              </FormGroup>
            </Form>
          </ListGroupItem>
        </ListGroup>
        <br/>
        <Button onClick={this.setEndTime} color='info'>End Time</Button>
        <p>End Time: {this.state.endtime === null ? '' : this.state.endtime}</p>
        <p>Time consumed: {this.state.elapsedtime !== null ? this.state.elapsedtime : ''} {this.state.elapsedtime !== null ? this.state.elapsedtime > 1 ? 'minutes' : this.state.elapsedtime > 0 ? 'minute': '' : '' }</p>
      </div>
    );
  }
}

export default Survey;